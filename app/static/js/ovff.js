$(document).ready(function() {
  function load_preset() {
    $.get('/static/preset.txt', function(data) {
      $('#ovff').val(data);
    });
  }

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

  $(".clear-btn").click(function() {
    var target = $($(this).data("target"));
    target.val("");
  });

  $(".load-preset-btn").click(function() {
    load_preset();
  });

  load_preset();
})
