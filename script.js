function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const currentScheme = html.style.colorScheme;
            
    if (currentScheme === 'dark') {
      html.style.colorScheme = 'light';
      icon.textContent = '🌙';
    } else {
      html.style.colorScheme = 'dark';
      icon.textContent = '☀️';
    }
}
        
        // Set initial theme based on system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.style.colorScheme = 'dark';
    document.getElementById('theme-icon').textContent = '☀️';
}
