import jsPDF from 'jspdf';
import { TeamMember } from '../types/team';

// Helper function to sanitize text for PDF
const sanitizeText = (text: string): string => {
  if (!text) return '';
  
  return text
    .replace(/[^\x20-\x7E]/g, '') // Remove non-ASCII characters
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/[^\x20-\x7E]/g, '') // Double check for any remaining non-ASCII
    .trim();
};

// Helper function to safely render text
const safeText = (text: string): string => {
  try {
    const sanitized = sanitizeText(text);
    // Debug logging for contact info
    if (text.includes('@') || text.includes('+') || text.includes('linkedin')) {
      console.log('Original text:', text);
      console.log('Sanitized text:', sanitized);
    }
    return sanitized;
  } catch (error) {
    console.warn('Text sanitization failed:', error);
    return 'Text unavailable';
  }
};

export const generateResumePDF = (member: TeamMember): void => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  
  let yPosition = margin;
  
  // Set consistent font throughout the document
  const FONT_FAMILY = 'helvetica';
  const FONT_SIZE_HEADER = 20;
  const FONT_SIZE_SECTION = 12;
  const FONT_SIZE_BODY = 10;
  const FONT_SIZE_SMALL = 9;
  
  // Helper function to set font consistently
  const setFont = (size: number, style: 'normal' | 'bold' = 'normal') => {
    doc.setFont(FONT_FAMILY, style);
    doc.setFontSize(size);
  };
  
  // Helper function to check if we need a new page
  const checkPageBreak = (requiredSpace: number = 50) => {
    if (yPosition > pageHeight - requiredSpace) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };
  
  // Helper function to display skills in 3-column grid
  const addSkillsGrid = (skills: string[], startY: number) => {
    const columns = 3;
    const rows = 7;
    const columnWidth = (contentWidth - 20) / columns; // 20mm for spacing between columns
    const rowHeight = 8; // Height between rows
    
    let currentY = startY;
    
    // Add column separators
    const col1X = margin + columnWidth;
    const col2X = margin + (columnWidth * 2);
    const gridHeight = rows * rowHeight;
    
    // Draw vertical lines to separate columns
    doc.setDrawColor(200, 200, 200); // Light gray
    doc.setLineWidth(0.5);
    doc.line(col1X, currentY - 2, col1X, currentY + gridHeight);
    doc.line(col2X, currentY - 2, col2X, currentY + gridHeight);
    
    // Process skills in groups of 3 (one row at a time)
    for (let row = 0; row < rows; row++) {
      // Check if we need a new page before each row
      if (currentY > pageHeight - 30) {
        doc.addPage();
        currentY = margin;
        // Redraw column separators on new page
        doc.line(col1X, currentY - 2, col1X, currentY + gridHeight);
        doc.line(col2X, currentY - 2, col2X, currentY + gridHeight);
      }
      
      // Get skills for this row (3 skills per row)
      const rowSkills = skills.slice(row * columns, (row + 1) * columns);
      
      // Display skills in this row
      rowSkills.forEach((skill, colIndex) => {
        const x = margin + (colIndex * columnWidth);
        
        // Add bullet point
        setFont(FONT_SIZE_BODY, 'normal');
        doc.setTextColor(0, 0, 0);
        doc.text('•', x, currentY);
        
        // Add skill text
        addText(skill, x + 5, currentY, {
          fontSize: FONT_SIZE_BODY,
          style: 'normal',
          color: [0, 0, 0],
          maxWidth: columnWidth - 10,
          lineHeight: 5
        });
      });
      
      currentY += rowHeight;
    }
    
    return currentY;
  };
  
  // Helper function to add text with word wrapping
  const addText = (text: string, x: number, y: number, options: any = {}) => {
    const maxWidth = options.maxWidth || contentWidth;
    const fontSize = options.fontSize || FONT_SIZE_BODY;
    const style = options.style || 'normal';
    
    // Sanitize text safely
    const cleanText = safeText(text);
    
    setFont(fontSize, style);
    if (options.color) {
      doc.setTextColor(options.color[0], options.color[1], options.color[2]);
    }
    
    // Use jsPDF's built-in text splitting for better reliability
    try {
      const lines = doc.splitTextToSize(cleanText, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * (options.lineHeight || 6));
    } catch (error) {
      // Fallback: render as single line if splitting fails
      doc.text(cleanText, x, y);
      return y + (options.lineHeight || 6);
    }
  };
  
  // Helper function to add section header
  const addSectionHeader = (title: string, y: number) => {
    // Add background for section header
    doc.setFillColor(240, 248, 255); // Light blue background
    doc.rect(margin - 5, y - 3, contentWidth + 10, 12, 'F');
    
    const newY = addText(title, margin, y, { 
      fontSize: FONT_SIZE_SECTION,
      style: 'bold',
      color: [26, 62, 140], // Brand primary color
      lineHeight: 8 
    });
    
    // Add underline
    doc.setDrawColor(30, 80, 255); // Brand CTA blue
    doc.setLineWidth(1);
    doc.line(margin, newY + 1, pageWidth - margin, newY + 1);
    
    return newY + 6;
  };
  
  // Helper function to add bullet points
  const addBulletPoints = (items: string[], startY: number, indent: number = 10) => {
    let currentY = startY;
    
    items.forEach((item, index) => {
      if (currentY > pageHeight - 30) {
        doc.addPage();
        currentY = margin;
      }
      
      // Add bullet point
      setFont(FONT_SIZE_BODY, 'normal');
      doc.setTextColor(0, 0, 0);
      doc.text('•', margin + indent, currentY);
      
      const textY = addText(item, margin + indent + 5, currentY, { 
        fontSize: FONT_SIZE_BODY,
        style: 'normal',
        color: [0, 0, 0],
        maxWidth: contentWidth - indent - 15,
        lineHeight: 5 
      });
      currentY = textY + 2;
    });
    
    return currentY;
  };
  
  // Helper function to add contact info
  const addContactInfo = (y: number) => {
    if (!member.resumeContent.contact) return y;
    
    const contact = member.resumeContent.contact;
    let currentY = y;
    
    // Location
    currentY = addText(`Location: ${contact.location}`, margin, currentY, { 
      fontSize: FONT_SIZE_BODY,
      style: 'normal',
      color: [0, 0, 0],
      lineHeight: 5 
    });
    
    // Email
    currentY = addText(`Email: ${contact.email}`, margin, currentY, { 
      fontSize: FONT_SIZE_BODY,
      style: 'normal',
      color: [0, 0, 0],
      lineHeight: 5 
    });
    
    // Phone
    currentY = addText(`Phone: ${contact.phone}`, margin, currentY, { 
      fontSize: FONT_SIZE_BODY,
      style: 'normal',
      color: [0, 0, 0],
      lineHeight: 5 
    });
    
    // LinkedIn
    if (member.socialLinks?.linkedin) {
      currentY = addText(`LinkedIn: ${member.socialLinks.linkedin}`, margin, currentY, { 
        fontSize: FONT_SIZE_BODY,
        style: 'normal',
        color: [0, 0, 0],
        lineHeight: 5 
      });
    }
    
    return currentY + 5;
  };
  
  // Add header background
  doc.setFillColor(26, 62, 140); // Brand primary color
  doc.rect(0, 0, pageWidth, 25, 'F');
  
  // Company branding
  addText('Sumano Tech Solution', margin, 15, {
    fontSize: FONT_SIZE_SECTION,
    style: 'bold',
    color: [255, 255, 255]
  });
  
  // Header Section
  yPosition = 35;
  yPosition = addText(member.name, margin, yPosition, { 
    fontSize: FONT_SIZE_HEADER,
    style: 'bold',
    color: [26, 62, 140], // Brand primary color
    lineHeight: 10 
  });
  
  yPosition = addText(member.title, margin, yPosition, { 
    fontSize: FONT_SIZE_SECTION,
    style: 'normal',
    color: [30, 80, 255], // Brand CTA blue
    lineHeight: 8 
  });
  
  // Professional Summary
  yPosition = addSectionHeader('Professional Summary', yPosition + 5);
  yPosition = addText(member.bio, margin, yPosition, { 
    fontSize: FONT_SIZE_BODY,
    style: 'normal',
    color: [0, 0, 0],
    lineHeight: 5 
  });
  
  // Contact Information
  yPosition = addContactInfo(yPosition + 5);
  
  // Professional Experience
  yPosition = addSectionHeader('Professional Experience', yPosition + 5);
  member.resumeContent.experience.forEach((exp, index) => {
    if (yPosition > pageHeight - 50) {
      doc.addPage();
      yPosition = margin;
    }
    
    // Split experience into title and bullet points
    const lines = exp.split('\n');
    const title = lines[0];
    const bulletPoints = lines.slice(1);
    
    // Add experience background
    doc.setFillColor(248, 250, 252); // Very light gray
    doc.rect(margin - 3, yPosition - 2, contentWidth + 6, 8 + (bulletPoints.length * 6), 'F');
    
    // Job title
    yPosition = addText(title, margin, yPosition, { 
      fontSize: FONT_SIZE_BODY,
      style: 'bold',
      color: [26, 62, 140], // Brand primary color
      lineHeight: 6 
    });
    
    // Bullet points
    yPosition = addBulletPoints(bulletPoints, yPosition + 2, 5);
    yPosition += 8;
  });
  
  // Technical Skills - Force new page
  // Always start Technical Skills on a new page
  doc.addPage();
  yPosition = margin;
  
  yPosition = addSectionHeader('Technical Skills', yPosition);
  
  // Display skills in 3-column grid (7 rows by 3 columns)
  yPosition = addSkillsGrid(member.resumeContent.skills, yPosition);
  
  // Education
  yPosition = addSectionHeader('Education', yPosition + 10);
  checkPageBreak(50);
  
  yPosition = addBulletPoints(member.resumeContent.education, yPosition, 5);
  
  // Certifications
  yPosition = addSectionHeader('Certifications', yPosition + 10);
  checkPageBreak(50);
  
  yPosition = addBulletPoints(member.resumeContent.certifications, yPosition, 5);
  
  // Projects & Initiatives
  if (member.resumeContent.projects && member.resumeContent.projects.length > 0) {
    yPosition = addSectionHeader('Projects & Initiatives', yPosition + 10);
    checkPageBreak(50);
    
    yPosition = addBulletPoints(member.resumeContent.projects, yPosition, 5);
  }
  
  // Leadership & Volunteer Work - Force new page
  if (member.resumeContent.leadership && member.resumeContent.leadership.length > 0) {
    // Always start Leadership & Volunteer Work on a new page
    doc.addPage();
    yPosition = margin;
    
    yPosition = addSectionHeader('Leadership & Volunteer Work', yPosition);
    
    yPosition = addBulletPoints(member.resumeContent.leadership, yPosition, 5);
  }
  
  // Soft Skills
  if (member.resumeContent.softSkills && member.resumeContent.softSkills.length > 0) {
    yPosition = addSectionHeader('Soft Skills', yPosition + 10);
    checkPageBreak(50);
    
    // Display soft skills as bullet points
    yPosition = addBulletPoints(member.resumeContent.softSkills, yPosition, 5);
  }
  
  // Footer
  const footerY = pageHeight - 15;
  addText('Generated by Sumano Tech Solution', margin, footerY, {
    fontSize: FONT_SIZE_SMALL,
    style: 'normal',
    color: [128, 128, 128]
  });
  addText(new Date().toLocaleDateString(), pageWidth - margin - 20, footerY, {
    fontSize: FONT_SIZE_SMALL,
    style: 'normal',
    color: [128, 128, 128]
  });
  
  // Save the PDF
  const fileName = `${member.name.replace(/\s+/g, '_')}_Resume.pdf`;
  doc.save(fileName);
};
