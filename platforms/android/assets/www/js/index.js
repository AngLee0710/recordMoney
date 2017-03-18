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
        input_or_output: $('#io_money').val(), 
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
            clearData();
    })
})

$('#refreshBtn').click(function() {
    $('#showMoney').html('');
    clearDataArray();
})


init();
function init() {
    $('#page_2').hide();
    getchPHPreturn();
}

function clearData() {
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
function clearDataArray() {
    dataDate = [];
    dataTime = [];
    dataType = [];
    dataIO = [];
    dataMoney = [];
    dataNotes = [];
    getchPHPreturn();
}

function showMoneyBox() {
    var i,j = 0;
    var color,count = 1;

    var DataLen = allData.length - 1;

    var dayArray = [];

    var tempDate = dataDate[DataLen];

    for(i = DataLen ; i >= 0 ; i--)
    {
        if(tempDate == dataDate[i-1])
            count++;
        else{
            tempDate = dataDate[i-1]
            dayArray[j] = count;
            count = 1;
            j++;
        }
    }

    var countArrayLen = dayArray.length - 1;

    for(i = 0 ; i <= countArrayLen ; i++)
    {
        switch(dayArray[i]){
            case 1:
                append_one(DataLen);
                break;
            case 2:
                append_two(DataLen);
                break;
            case 3:
                append_three(DataLen);
                break;
            case 4:
                append_four(DataLen);
                break;
            case 5:
                append_five(DataLen);
                break;
            case 6:
                append_six(DataLen);
                break;
            case 7:
                append_seven(DataLen);
                break;
            case 8:
                append_eight(DataLen);
                break;
            case 9:
                append_nine(DataLen);
                break;
            case 10:
                append_ten(DataLen);
                break;
        }
        DataLen -= dayArray[i];
    }
}

function append_one(i) {
    $('#showMoney').append('<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
                            '<table>' +
                                '<thead>' + 
                                    '<tr>' +
                                        '<th>時間</th>' +
                                        '<th>類型</th>' + 
                                        '<th>金額</th>' + 
                                        '<th>備註</th>' +
                                    '</tr>' +
                                '</thead>' +
                                '<tbody>' +
                                    '<tr style="background-color:#DDDDDD;">' +
                                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                                    '</tr>' +
                                '</tbody>' +
                            '</table>');
}

function append_two(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}

function append_three(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-2] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}

function append_four(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-2] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-3] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}

function append_five(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-2] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-3] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-4] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}

function append_six(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-2] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-3] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-4] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-5] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}

function append_seven(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-2] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-3] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-4] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-5] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-6] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}

function append_eight(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-2] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-3] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-4] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-5] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-6] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-7] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}

function append_nine(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-2] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-3] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-4] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-5] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-6] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-7] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-8] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-8] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-8] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-8] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}

function append_ten(i) {
    $('#showMoney').append(
        '<a class="ui-btn text" id="controlBtn">' + dataDate[i] + '</a>' +
            '<table>' +
                '<thead>' + 
                    '<tr>' +
                        '<th>時間</th>' +
                        '<th>類型</th>' + 
                        '<th>金額</th>' + 
                        '<th>備註</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i] + '</span></th>' +
                        '<th><span class="text">' + dataType[i] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-1] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-1] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-2] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-2] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-3] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-3] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-4] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-4] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-5] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-5] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-6] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-6] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-7] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-7] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-8] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-8] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-8] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-8] + '</span></th>' +
                    '</tr>' +
                    '<tr style="background-color:#DDDDDD;">' +
                        '<th><span class="text">' + dataTime[i-9] + '</span></th>' +
                        '<th><span class="text">' + dataType[i-9] + '</span></th>' +
                        '<th><span class="text">' + dataMoney[i-9] + '</span></th>' +
                        '<th><span class="text">' + dataNotes[i-9] + '</span></th>' +
                    '</tr>' +
                '</tbody>' +
            '</table>');
}