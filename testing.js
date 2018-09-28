function validatecreditcard(num) {
    console.log(num.remove("-"))
    if (num.length != 16) {console.log('Rejected');
    }
    else {console.log('Accepted');
    }
}

validatecreditcard("1234-1234-1234-1234")