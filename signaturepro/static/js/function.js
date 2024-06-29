$(document).ready(function(){

    // $("#price-filter-btn").on("click", function(){

    //     let filter_object = {}

    //     let min_price = $("#max_price").attr("min")
    //     let max_price = $("#max_price").val()

    //     filter_object.min_price = min_price;
    //     filter_object.max_price = max_price;

    //     $.ajax({
    //         url: 'filter-products',
    //         data: filter_object,
    //         dataType: 'json',
    //         beforeSend: function() {
    //             console.log("Sending Data...")
    //         },
    //         success: function(response){
    //             console.log(response);
    //             console.log("Success...")
    //             $("#filtered-products").html(response.data)
    //         }
    //     })
        
    // })


    $("#max_price").on("blur", function(){
        let min_price = $(this).attr("min")
        let max_price = $(this).attr("max")
        let current_price = $(this).val()

        if(current_price < parseInt(min_price) || current_price > parseInt(max_price)){
            min_price = Math.round(min_price * 100) / 100
            max_price = Math.round(max_price * 100) / 100

            alert("Ціна повинна бути між ₴" + min_price + ' та ₴' + max_price)
            $(this).val(max_price)
            $('#range').val(max_price)

            $(this).focus()

            return false

        }
    })
})