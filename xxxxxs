document.addEventListener("DOMContentLoaded", function() {
  var ruta_documento_pdf;
  var btnCargar = document.getElementById('btn-cargar');
  var inputPdf = document.getElementById('input-pdf');

  inputPdf.addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
      ruta_documento_pdf = URL.createObjectURL(file);
      btnCargar.disabled = false;
    }
  });

  btnCargar.addEventListener('click', async function() {
    if (ruta_documento_pdf) {
      // Precios por página
      var precioBK = 0.10;
      var precioColor = 0.25;

      // Cargar el documento PDF
      var pdf = await pdfjsLib.getDocument(ruta_documento_pdf).promise;
      var num_paginas = pdf.numPages;
      var countBlancoYNegro = 0;
      var countColor = 0;

      var tbodyNumPag = document.getElementById('num_pag');
      var tbodyConte = document.getElementById('conte');

      // Iterar a través de cada página del PDF
      for (var i = 1; i <= num_paginas; i++) {
        var pagina = await pdf.getPage(i);
        var viewport = pagina.getViewport({ scale: 1.5 });
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        var renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await pagina.render(renderContext).promise;

        // Verificar el porcentaje de píxeles en color y blanco y negro
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
        var totalPixels = imageData.length / 4; // Cada píxel tiene 4 componentes (RGBA)

        var colorPixels = 0;
        var blackAndWhitePixels = 0;
        for (var j = 0; j < imageData.length; j += 4) {
          var r = imageData[j];
          var g = imageData[j + 1];
          var b = imageData[j + 2];

          if (r === g && g === b) {
            blackAndWhitePixels++;
          } else {
            colorPixels++;
          }
        }

        var colorPercentage = (colorPixels / totalPixels) * 100;
        var blackAndWhitePercentage = (blackAndWhitePixels / totalPixels) * 100;

        // Crear una fila en la tabla para mostrar el resultado de cada página
        var rowNumPag = document.createElement('tr');
        var rowConte = document.createElement('tr');
        var pageNumberCell = document.createElement('td');
        var contentCell = document.createElement('td');

        pageNumberCell.textContent = i;
        if (blackAndWhitePercentage >= 95) {
          contentCell.textContent = 'Blanco y negro';
          countBlancoYNegro++;
        } else {
          if (colorPercentage >= 5) {
            contentCell.textContent = 'Color';
            countColor++;
          } else {
            contentCell.textContent = 'Blanco y negro';
            countBlancoYNegro++;
          }
        }

        rowNumPag.appendChild(pageNumberCell);
        rowConte.appendChild(contentCell);

        tbodyNumPag.appendChild(rowNumPag);
        tbodyConte.appendChild(rowConte);
      }

      document.getElementById('total-blanco-negro').textContent = countBlancoYNegro.toString();
      document.getElementById('total-pag-color').textContent = countColor.toString();

      var totalPrecioBK = (countBlancoYNegro * precioBK).toFixed(2);
      var totalPrecioColor = (countColor * precioColor).toFixed(2);

      var totalPrecio = (parseFloat(totalPrecioBK) + parseFloat(totalPrecioColor)).toFixed(2);

      document.getElementById('total-bk').textContent = totalPrecioBK;
      document.getElementById('total-color').textContent = totalPrecioColor;
      document.getElementById('total-total').textContent = totalPrecio;
    }
  });
});

  });
});
