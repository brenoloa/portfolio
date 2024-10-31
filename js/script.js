let index = 0;
const images = document.querySelectorAll('.banner-image');

function showNextImage() {
    // Remove a classe 'active' da imagem atual
    images[index].classList.remove('active');
    
    // Avança para a próxima imagem (ou volta para a primeira)
    index = (index + 1) % images.length;
    
    // Adiciona a classe 'active' à próxima imagem
    images[index].classList.add('active');
}

// Inicia a troca de imagens a cada 3 segundos
setInterval(showNextImage, 3000);

// Exibe a primeira imagem ao carregar a página
images[index].classList.add('active');
