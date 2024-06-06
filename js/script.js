/*ini javascript*/



document.getElementById("btn-submit").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let birthDate = document.getElementById("birth-date").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let message = document.querySelector('textarea[name="message"]').value;

    document.getElementById("sender-full-name").textContent = name;
    document.getElementById("sender-birth-date").textContent = birthDate;
    document.getElementById("sender-gender").textContent = gender;
    document.getElementById("sender-full-messages").textContent = message;

    // Tambahkan kode lainnya sesuai kebutuhan, seperti mengirim data ke server, dll.
});

let namebanner = prompt('Siapakah Nama Anda?',);
document.getElementById('name-banner').innerHTML = namebanner