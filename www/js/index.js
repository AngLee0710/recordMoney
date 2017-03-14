//全域變數
var myName = '40343113';
var allData = [];



//chart 陣列
var dataDate = [];
var dataTime = [];
var dataType = [];
var dataIO = [];
var dataMoney = [];
var dataNotes = [];


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
        $('#showData').html('金額不可空格!!!!!!');
        return;
    }
    $.post('http://140.130.35.62/csie40343113/php/recordMoney.php', 
        {
        Name: myName, 
        input_or_output: $('io_money').val(), 
        Money: $('#cost').val(), 
        Type: $('#type').val(), 
        Notes: $('#notes').val()}, 
        function(result) {
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

$('#controlBtn').click(function(){
    $('#textBox').slideUp();
})

init();
function init() {
    $('#page_2').hide();
    getchPHPreturn();
}

function clearDate() {
    $('#cost').val('');
    $('#notes').val('');
    $('#showData').delay(1500).hide(1);
}

function getchPHPreturn() {
    $.getJSON('http://140.130.35.62/csie40343113/php/showOutput.php',function(data,status){
        allData = data;
        screeningData();
    });
}

function screeningData() {
    var i;
    var temp = [];   
    for(i = 0 ; i < allData.length ; i++)
    {
        dataDate[i] = allData[i].Date;
        dataTime[i] = allData[i].Time;
        switch(allData[i].Type){
            case 'Food':
                dataType[i] = '吃飯';
                break;
            case 'Locomotive':
                dataType[i] = '機車';
                break;
            case 'Play':
                dataType[i] = '玩';
                break;
            case 'Home':
                dataType[i] = '水電房租相關';
                break;
        }
        if(allData[i].input_or_output == 'output')
            dataIO[i] = '支出';
        else
            dataIO[i] = '收入';
        dataMoney[i] = allData[i].Money;
        dataNotes[i] = allData[i].Notes;
    }
    showMoneyBox();
}

//清空陣列
function clearData() {
    dataDate = [];
    dataTime = [];
    dataType = [];
    dataIO = [];
    dataMoney = [];
    dataNotes = [];
}

function showMoneyBox() {
    var i;
    for(i = 0; i < allData.length ; i++)
    {
        $('#showMoney').append('<div id="MoneyBox">' +
                            '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
                            '<div id="textBox"><b class="text">時間:</b><span class="text">' + dataTime[i] + '</span><br />' +
                            '<b class="text">類型:</b><span class="text">' + dataType[i] + '</span><br />' +
                            '<b class="text">金額:</b><span class="text">' + dataMoney[i] + '</span><br />' +
                            '<b class="text">備註:</b><span class="text">' + dataNotes[i] + '</span><br />' +
                        '</div></div>');
    }
}