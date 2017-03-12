var myName = '40343113';

$('#page_1_btn').click(function() {
    $('#page_1').show();
    $('#page_2').hide();
})

$('#page_2_btn').click(function() {
    $('#page_1').hide();
    $('#page_2').show();
})

$('#recordCost').click(function() {
    if($('#cost').val()==''){
        $('#showData').show()
        $('#showData').html('金額不可空格');
        return;
    }
    $.post('http://140.130.35.62/csie40343113/php/recordMoney.php', 
        {Name: myName, Money: $('#cost').val(), Type: $('#type').val(), Notes: $('#notes').val()}, function(result) {
            if(result == 'fail'){
                $('#showData').show()
                $('#showData').html('資料上傳失敗!!!!!');
            }
            else{
                    $('#showData').show()
                    $('#showData').html('資料上傳成功!!!!!');
            }
            clearDate();
    })
})





init();
function init() {
    $('#page_2').hide();
}

function clearDate() {
    $('#cost').val('');
    $('#notes').val('');
    $('#showData').delay(1500).hide(1);
}