/**
 * Utility functions for smooth scrolling and navigation
 */

/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Checks if an element is in the viewport
 * @param element - The element to check
 * @param threshold - The threshold for visibility (0-1)
 * @returns boolean indicating if element is visible
 */
export const isElementInViewport = (element: Element, threshold: number = 0.1): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold &&
    rect.left <= windowWidth &&
    rect.right >= 0
  );
};

/**
 * Debounced scroll handler to prevent excessive function calls
 * @param callback - Function to call on scroll
 * @param delay - Delay in milliseconds (default: 100)
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 100
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};
