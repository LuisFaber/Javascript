const typeTriangle = (a, b, c) => { // função Arrow definindo 3 tipos
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
  // "a" menor que "b" + "c" e "b" menor que "a" + "c" e "c" menor que "a" + "b"
      if (a == b && b == c) {
        console.log('Triângulo equilátero');
      }
      // para ser "triângulo equilátero" "a" precisa ser igual a "b" e "b" precisa ser igual a "c"
      else if (a == b || a == c || c == b) {
        console.log('Triângulo isóceles');
      }
      // para ser triângulo isóceles ou "a" precisa ser igual a "b" ou "a" precisa ser igual a "c" ou "c" precisa ser igual a "b"
      else {
        console.log('Triângulo escaleno');
      }
      // Para ser triangualo  escaleno precisa não se qualificar para os parametros anteriores, ou seja "a" != "b" e "b" != "c" e "c" != "a". (todos diferentes)
    }
    else {
      console.log('Nenhuma medida foi informada!');
    }
  
  }
  
  typeTriangle(10, 5, 10);
  typeTriangle(5, 10, 10);
  typeTriangle(10, 10, 5);
  typeTriangle(10, 10, 10);
  typeTriangle(3, 4, 5);
  typeTriangle();