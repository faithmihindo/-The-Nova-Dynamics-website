
import { initChatWidget } from "./chat.ts";

document.addEventListener('DOMContentLoaded', () => {
  initChatWidget();

  // Mobile Menu Logic
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
