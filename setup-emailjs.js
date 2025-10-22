#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 EmailJS Setup Helper for Sumano Tech Solution\n');

// Check if .env exists
const envPath = path.join(process.cwd(), '.env');
const envExamplePath = path.join(process.cwd(), 'env.example');

if (fs.existsSync(envPath)) {
  console.log('✅ .env file already exists');
} else {
  if (fs.existsSync(envExamplePath)) {
    try {
      fs.copyFileSync(envExamplePath, envPath);
      console.log('✅ Created .env file from env.example');
    } catch (error) {
      console.error('❌ Failed to create .env file:', error.message);
      process.exit(1);
    }
  } else {
    console.error('❌ env.example file not found');
    process.exit(1);
  }
}

console.log('\n📋 Next steps:');
console.log('1. Go to https://www.emailjs.com/ and create an account');
console.log('2. Set up Gmail service and get your Service ID');
console.log('3. Create an email template and get your Template ID');
console.log('4. Get your Public Key from Account → General');
console.log('5. Update .env file with your credentials:');
console.log('   REACT_APP_EMAILJS_SERVICE_ID=service_your_id');
console.log('   REACT_APP_EMAILJS_TEMPLATE_ID=template_your_id');
console.log('   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key');
console.log('6. Restart your development server: npm start');
console.log('\n📖 For detailed instructions, see EMAILJS_SETUP.md');
console.log('\n🎯 The contact form will send emails to: sumanoteam@gmail.com');

