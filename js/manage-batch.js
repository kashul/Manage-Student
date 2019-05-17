

for (var i=0;i<customers.length;i++){
    $("tbody").append("<tr ><td>"+customers[i].id+"</td>" +
        "<td>"+ customers[i].name+"</td>" +
        "<td>"+customers[i].address+"</td>" +
        "<<td style='position: relative'><img class='imgbin' src='images/recyclebin.png' ></td>"+
        "</tr>");





}
$(".imgbin").hover(function(){
    // $(this).off('click');
    $(this).attr("src","images/recyclebin-hover.png");



},function(){
    $(this).attr("src","images/recyclebin.png");
});


$(document).ready(function () {
    $("#txtCustomerID").focus();

});
$("#btnClear").click(clear);

function clear(){

    $("#txtCustomerID").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");

    $("#txtCustomerID").css("border-color","lightgrey");
    $("#txtCustomerName").css("border-color","lightgrey");
    $("#txtCustomerAddress").css("border-color","lightgrey");


}



//data load
$("#btnSave").click(function () {
    var id = $("#txtCustomerID").val();
    var name = $("#txtCustomerName").val();
    var address = $("#txtCustomerAddress").val();

    var html = "<tr>" +
        "<td>" + id + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + address + "</td>" +
        "<td style='position: relative'>  <img class='imgbin' src='images/recyclebin.png' >  </td>"
    "</tr>";

    $("#tblMCustomer tbody").append(html);
    $(".imgbin").hover(function(){
        // $(this).off('click');
        $(this).attr("src","images/recyclebin-hover.png");


    },function(){
        $(this).attr("src","images/recyclebin.png");
    });

    //remove data
    $("#tblMCustomer tr:last-child td:last-child").click(function () {
        if (confirm("Are you sure, do you want to delete this ?")) ;
        var row = $(this).parents("tr");
        $(this).parents("tr").fadeOut(200, function () {
            row.remove();


        });

    })


    var isEmpty = checkEmpty(id,name,address);
    if (isEmpty) {
        var isValidate = checkValidate(id,name,address);
        if (isValidate) {
            addCustomer(id, name, address);
            reload();
        }
    }
});

function checkEmpty(id,name,address) {
    if ($.trim(id).length == 0){
        $("#txtCustomerID").css("border-color","red");
        console.log("Customer ID is empty");
        $("#txtCustomerID").focus();
        return false;
    }else if ($.trim(name).length == 0){
        $("#txtCustomerID").css("border-color","lightgrey");
        $("#txtCustomerName").css("border-color","red");
        console.log("Customer Name is empty");
        $("#txtCustomerName").focus();
        return false;
    } else if ($.trim(address).length == 0){
        $("#txtCustomerName").css("border-color","lightgrey");
        $("#txtCustomerAddress").css("border-color","red");
        console.log("Customer Address is empty");
        $("#txtCustomerAddress").focus();
        return false;
    }else {
        $("#txtCustomerID").css("border-color","lightgrey");
        $("#txtCustomerName").css("border-color","lightgrey");
        $("#txtCustomerAddress").css("border-color","lightgrey");
        return true;
    }
};

function checkValidate(id,name,address) {
    var validateID =  /^[A-Za-z0-9]+$/;
    var validateName = /^[A-Za-z]+$/;
    var validateAddress = /^[A-Za-z0-9]+$/;

    if (!validateName.test(name)){
        $("#txtCustomerName").css("border-color","red");
        $("#txtCustomerName").focus();
        alert("incorrect name");
        return false;
    }else if (!validateAddress.test(address)){
        $("#txtCustomerIName").css("border-color","lightgrey");
        $("#txtCustomerAddress").css("border-color","red");
        $("#txtCustomerAddress").focus();
        alert("incorrect address");
        return false;
    }else if (!validateID.test(id)){
        $("#txtCustomerAddress").css("border-color","lightgrey");
        alert("incorrect cutsomer ID");
        $("#txtCustomerID").focus();
        $("#txtCustomerID").css("border-color","red");
        return false;
    }else if($.trim(id).length != 4){
        $("#txtCustomerID").css("border-color","lightgrey");
        alert("you must enter charcter 4");
        $("#txtCustomerID").focus();
        $("#txtCustomerID").css("border-color","red");
        return false;
    }else {
        console.log("validate Success");
        $("#txtCustomerID").css("border-color","lightgrey");
        $("#txtCustomerName").css("border-color","lightgrey");
        $("#txtCustomerAddress").css("border-color","lightgrey");
        return true;
    }
}