 document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get the values from the form fields
            var fullname = document.getElementById("fullname").value;
            var email = document.getElementById("email").value;
            var topicsCheckboxes = document.querySelectorAll('input[name="topics"]:checked');

            // Extract the values of selected checkboxes
            var topicsArray = Array.from(topicsCheckboxes).map(function(checkbox) {
                return checkbox.value;
            });

            // Join the topics into a comma-separated string
            var topicsString = topicsArray.join(' | ');

            // Create a new XMLHttpRequest object
            var xhr = new XMLHttpRequest();

            // Configure the request
            xhr.open("POST", "https://go.appsassociates.com/l/312001/2018-11-06/8ykw8/", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            // Set up a function to handle the response
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // Request was successful, clear form fields
                        document.getElementById("myForm").reset();
                    } else {
                        // Request failed
                        console.error('Request failed:', xhr.status);
                    }
                }
            };

            // Prepare the data to be sent
            var params = "Full Name=" + encodeURIComponent(fullname) + "&Email=" + encodeURIComponent(email) + "&Tag=" + encodeURIComponent(topicsString);

            // Send the request
            xhr.send(params);
        });
		
