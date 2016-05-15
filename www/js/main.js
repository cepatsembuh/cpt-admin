/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/
var dataUrl = 'http://cepatsembuh.firebaseio.com/',
    progress = 'Syncing data..',
    success = 'Data ter-update',
    fail = 'Gagal meng-update data';

document.addEventListener('deviceready', function () {
    Firebase.goOnline();
});

function getPasien(tipe) {
  // Firebase ref
  var dataRef = new Firebase(dataUrl + tipe + '/pasien');

  // Friendly message
  alert(wait);

  // Show data
  dataRef.once('value', function(snapshot) {
    var data = snapshot.numChildren();
    alert('The total is:' + data);
  });
}

function getFaskes(tipe) {
  // Firebase ref
  var dataRef = new Firebase(dataUrl + tipe + '/faskes');

  // Friendly message
  alert(wait);

  // Show data
  dataRef.once('value', function(snapshot) {
    var data = snapshot.numChildren();
    alert('The total is:' + data);
  });
}

function link(page) {
  var url = page + '.html';
  window.location.href = url;
}

function updateBed() {
  var username = $('#username').val(),
      tipe = $('#tipe').val(),
      breanna = $('#kamar_1').val(),
      brea = $('#kamar_2').val(),
      yde = $('#kamar_3').val();

  if (username === '' || tipe === '') {
    alert('Mohon isi semua input');
  } else if (brea === '' || breanna === '' || yde === '') {
    alert('Data Tempat-Tidur tidak valid ');
  } else {
    // Define firebase URL
    console.log('Defining firebase URL...');
    var ref = new Firebase(dataUrl + tipe + '/faskes/' + username + '/tempat_tidur'),
        brea_is_pretty = Number(breanna),
        brea_is_beatiful = Number(brea),
        crush_on_brea = Number(yde);

    // Friendly message
    update = 'Updating data...';
    console.log(update);
    alert(update);

    // Update the data
    ref.update({
      satu: brea_is_pretty,
      dua: brea_is_beatiful,
      tiga: crush_on_brea
    }, function(error){
      if (!error) {
        alert(success);
      } else {
        // Error handler
        alert(error)
      }
    });
  }
}

function totalPasien() {
  // Get input value
  var username = $('#username').val(),
      tipe = $('#tipe').val();

  // Firebase ref
  var url = dataUrl + tipe + '/faskes/' + username + '/pasien';
  var dataRef = new Firebase(url);

  dataRef.once('value', function(snapshot) {
   var data = snapshot.numChildren();
   alert('Jumlah Pasien:' + data);
  }, function(error) {
   if (!error) {
     alert(success)
   } else {
     alert(error)
   }
 });
}
