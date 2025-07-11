let currentIndex = 0;
let images = [];

function openLightbox(clickedImg) 
{
    images = Array.from(document.querySelectorAll('.gallery .image img'));
    currentIndex = images.findIndex(img => img.src === clickedImg.src);

    document.getElementById("lightbox-img").src = clickedImg.src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() 
{
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) 
{
     currentIndex += direction;

     if (currentIndex < 0) currentIndex = images.length - 1;
     if (currentIndex >= images.length) currentIndex = 0;

  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) 
{
    const allImages = document.querySelectorAll('.gallery .image');
        allImages.forEach(img => 
        {
            if (category === 'all' || img.classList.contains(category)) 
            {
                img.style.display = 'block';
            } else 
            {
                img.style.display = 'none';
            }
        });
}