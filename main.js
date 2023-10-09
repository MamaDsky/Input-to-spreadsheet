  const scriptURL = 'https://script.google.com/macros/s/AKfycbzPqvXt8a8N2cEs4TatAvyK7KKA0a42NbtI0-iYvKpXH79yowyBQAXgych71ItRvt5X/exec'
  const form = document.forms['project1-database']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
        Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data anda berhasil dikumpulkan',
        footer: '<a target="BLANK" href="https://docs.google.com/spreadsheets/d/1jd6rUqkLCbCJ56X-RaNLaBSN30yfQfCcbxg7FE9i41U/edit?usp=sharing">Pergi ke Spreadsheet</a>'
      }), 
      form.reset();})
      .catch(error => console.error('Error!', error.message))
  })
