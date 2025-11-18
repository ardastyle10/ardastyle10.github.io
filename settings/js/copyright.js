document.addEventListener('DOMContentLoaded', function () {
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.innerText = 'Arda Ganz';
    }
});



document.addEventListener('DOMContentLoaded', function() {
  const namaOwner = "Arda Ganz";
  document.querySelectorAll('.copyright2').forEach(function(el){
    el.textContent = namaOwner;
  });
});
