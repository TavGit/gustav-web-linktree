document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("input");
    const body = document.body;
  
    // Fungsi untuk mengatur tema
    const switchTheme = () => {
      if (toggleSwitch.checked) {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
      } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
      }
    };
  
    // Event listener untuk perubahan pada saklar
    toggleSwitch.addEventListener("change", switchTheme);
  
    // Inisialisasi tema berdasarkan status saklar
    switchTheme();
  });
  