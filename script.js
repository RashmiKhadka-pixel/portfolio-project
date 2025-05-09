document.addEventListener("DOMContentLoaded", () => 
{
  // For the Send Button (Contact Page)
  const sendBtn = document.querySelector("button[type='submit']");
  if (sendBtn) {
    sendBtn.addEventListener("mouseover", () => {
      sendBtn.style.boxShadow = "0 0 15px peachpuff, 0 0 25px peachpuff";
      sendBtn.style.border = "2px solid black"; // Add black border
      sendBtn.style.transition = "all 0.3s ease";
    });

    sendBtn.addEventListener("mouseout", () => {
      sendBtn.style.boxShadow = "none";
      sendBtn.style.border = "none";
    });
  }

  // For Social Media Icons
  const icons = document.querySelectorAll(".social-links a i");
  icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.style.transform = "translateY(-8px) scale(1.2)";
      icon.style.transition = "transform 0.2s ease, color 0.2s ease";
      icon.style.color = "grey"; 
    });

    icon.addEventListener("mouseout", () => {
      icon.style.transform = "translateY(0) scale(1)";
      icon.style.color = "";
    });
  });

  //HOMEPAGE//
const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', () => {
  logo.classList.add('bounce');

  // Remove the class after animation ends to allow repeat
  logo.addEventListener('animationend', () => {
    logo.classList.remove('bounce');
  }, { once: true });
});

const readMoreBtn = document.querySelector(".readmore button");
const moreText = document.querySelector(".more-text");

if(readMoreBtn && moreText)
{
  readMoreBtn.addEventListener("mouseover", () => {
    readMoreBtn.style.transform = "translateY(-6px) scale(1.1)";
    readMoreBtn.style.boxShadow = "0 0 15px peachpuff, 0 0 25px peachpuff";
    readMoreBtn.style.border = "2px solid black";
    readMoreBtn.style.transition = "all 0.3s ease";
  });

  readMoreBtn.addEventListener("mouseout", () => {
    readMoreBtn.style.transform = "translateY(0) scale(1)";
    readMoreBtn.style.boxShadow = "none";
    readMoreBtn.style.border = "2px solid black";
  });
}

let more = document.querySelectorAll('.more');
for (let i=0; i<more.length; i++)
{
  more[i].addEventListener('click', function(){
    more[i].parentNode.classList.toggle('active')
  })
}
});

