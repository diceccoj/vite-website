

  const fade_left_objects = document.querySelectorAll('.left');
  const fade_right_objects = document.querySelectorAll('.right');
  const top_image = document.querySelector('.top_image');
  const fade_in_objects = document.querySelectorAll('.fade-in');



//creates an observer for each main class and allows for 'fading in' animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('fade-from-left');
        else entry.target.classList.remove('fade-from-left');   
    })
},
   { threshold: 0.5
   });

const right = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('fade-from-right');
        else entry.target.classList.remove('fade-from-right');   
    })
},
   { threshold: 0.5
   });

const topImage = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('top_img');
        else entry.target.classList.remove('top_img');   
    })
},
   { threshold: 0.5
   });

const fadeIn = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in-anim');
        else entry.target.classList.remove('fade-in-anim');   
    })
},
   { threshold: 0.5
   });

if (fade_left_objects != null) {
  for (let i = 0; i < fade_left_objects.length; i++) {
    const elements = fade_left_objects[i];
    observer.observe(elements);
  } 
}

if (fade_right_objects != null) {
  for (let i = 0; i < fade_right_objects.length; i++) {
      const elements = fade_right_objects[i];
      right.observe(elements);
  } 
}

if (top_image != null) {
  topImage.observe(top_image);
}

if (fade_in_objects != null) {
  for (let i = 0; i < fade_in_objects.length; i++) {
    const elements = fade_in_objects[i];
    fadeIn.observe(elements);
  } 
}


