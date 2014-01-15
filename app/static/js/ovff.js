$(document).ready(function() {
  $("#to_chinese").click(function() {
    var content = $('#ovff').val();
    if (content.length) {
      $.post('/convert.json', {
        op: "decode",
        text: content
      }, function(data, textStatus) {
        $('#chinese').val(data.result);
      });
    }
  });

  $("#to_ovff").click(function() {
    var content = $('#chinese').val();
    if (content.length) {
      $.post('/convert.json', {
        op: "encode",
        text: content
      }, function(data, textStatus) {
        $('#ovff').val(data.result);
      });
    }
  });
})
