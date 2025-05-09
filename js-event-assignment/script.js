// 1. Event Handling

document.getElementById("changeBtn").addEventListener("click", () => {
    document.getElementById("changeBtn").textContent = "You Clicked Me!";
    document.getElementById("changeBtn").style.backgroundColor = "#4caf50";
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    //console.log("Key pressed:", e.key);
    alert("Key pressed: " + e.key);
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("double-click detected!");
  });
  
  // 2. Interactive Elements
  
  // Tabs
  const tabButtons = document.querySelectorAll(".tab");
  const tabContent = document.getElementById("tab-content");
  
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabNum = btn.getAttribute("data-tab");
      tabContent.textContent = `You opened Tab ${tabNum}!`;
    });
  });
  
  // Image gallery
  const galleryImage = document.getElementById("galleryImage");
  const imageUrls = [
    "https://images.pexels.com/photos/10742506/pexels-photo-10742506.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/30869001/pexels-photo-30869001/free-photo-of-vintage-vinyl-listening-session-in-jakarta.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/31896480/pexels-photo-31896480/free-photo-of-scenic-coastal-view-with-blue-ocean-and-boats.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/31849410/pexels-photo-31849410/free-photo-of-spiral-staircase-in-modern-urban-courtyard.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  ];
  let imgIndex = 0;
  
  document.getElementById("nextImg").addEventListener("click", () => {
    imgIndex = (imgIndex + 1) % imageUrls.length;
    galleryImage.src = imageUrls[imgIndex];
  });

  document.getElementById("prevImg").addEventListener("click", () => {
    imgIndex = (imgIndex - 1 + imageUrls.length) % imageUrls.length;
    galleryImage.src = imageUrls[imgIndex];
  });
  
  // 3. Form Validation
  const form = document.getElementById("myForm");
  const password = document.getElementById("password");
  const passwordMsg = document.getElementById("passwordMsg");
  
  password.addEventListener("input", () => {
    if (password.value.length < 8) {
      passwordMsg.textContent = "Password must be at least 8 characters";
      passwordMsg.style.color = "red";
    } else {
      passwordMsg.textContent = "Looks good!";
      passwordMsg.style.color = "green";
    }
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email address");
      return;
    }
  
    if (password.value.length < 8) {
      alert("Password too short!");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  