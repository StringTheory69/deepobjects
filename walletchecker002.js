let cohortMintDate = "10.10";

let wallet = [
  "0x1234",
  "0x5678"
]

$( "#check-button" ).click(function(address) {
  console.log("clicked");
  if (wallet.includes(address.toString())) {
    $("#success-message").val(`You are in The Cohort and will be able to mint on ${cohortMintDate}`);
    $( "#form-success" ).show('slow');
  } else {
    $( "#form-error" ).hide('slow');
  };
  
});
