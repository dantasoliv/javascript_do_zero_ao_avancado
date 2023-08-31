let a = document.querySelector("footer a"); // Selecionando o elemento com querySelector

console.log(a.getAttribute('href')); // Acessando o valor do atritubo especificado, recebe um parâmetro que é o nome atributo

let link = 'https://www.google.com.br/?gfe_rd=cr&ei=CksVWLa5EeTM8AegjIHYDg&gws_rd=ssl'; // Criando uma varável com uma url

a.setAttribute('href', link); // Alterando o valor do atributo de um elemento, recebe dois parâmetroos: o nome do atributo e o valor

console.log(a.getAttribute('href'));