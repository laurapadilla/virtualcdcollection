$('.vertical-nav a').on('click', function() {
  
  var filter = $(this).attr('data-filter')
  
  console.log(filter)
  $('.all').hide()
  $(filter).show()
  
//   this blocks the link from following the href
  return false
  
})