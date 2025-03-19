// Branch-wise student login data with redirect paths
const loginData = {
    master: {
    students: [{
      username: "master",
      password: "Happykids",
      redirect: "/Online-monitoring/Camera_Access/adminview.html"
    }]
  },
    kolathur: {
        students: [
            { username: "admin", password: "kolathurTNHK", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
          //  { username: "KR001", password: "pass01ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR002", password: "pass02ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR003", password: "pass03ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR004", password: "pass04ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR005", password: "pass05ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR006", password: "pass06ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
         // { username: "KR007", password: "pass07ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR008", password: "pass08ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR009", password: "pass09ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR010", password: "pass10ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR011", password: "pass11ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR012", password: "pass12ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR013", password: "pass13ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR014", password: "pass14ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR015", password: "pass15ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },
            { username: "KR016", password: "pass16ko", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Kolathur.html" },//New adm
        ],
    },
    tiruppur: {
        students: [
            { username: "admin", password: "tiruppurTNHK", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR001", password: "pass01ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR002", password: "pass02ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR003", password: "pass03ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR004", password: "pass04ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR005", password: "pass05ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR006", password: "pass06ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR007", password: "pass07ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR008", password: "pass08ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR009", password: "pass09ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
            { username: "TR010", password: "pass10ti", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tiruppur.html" },
        ],
    },
    tambaram: {
        students: [
            { username: "admin", password: "tambaramTNHK", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM001", password: "pass01th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM002", password: "pass02th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM003", password: "pass03th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM004", password: "pass04th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM005", password: "pass05th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM006", password: "pass06th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM007", password: "pass07th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM008", password: "pass08th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM009", password: "pass09th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
            { username: "TM010", password: "pass10th", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_Tambaram.html" },
        ],
    },
    pollachi: {
        students: [
            { username: "admin", password: "pollachiTNHK", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI001", password: "pass01po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI002", password: "pass02po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI003", password: "pass03po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI004", password: "pass04po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI005", password: "pass05po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI006", password: "pass06po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI007", password: "pass07po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI008", password: "pass08po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI009", password: "pass09po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI010", password: "pass10po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI011", password: "pass11po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI012", password: "pass12po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI013", password: "pass13po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI014", password: "pass14po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI015", password: "pass15po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI016", password: "pass16po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI017", password: "pass17po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI018", password: "pass18po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI019", password: "pass19po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI020", password: "pass20po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI021", password: "pass21po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI022", password: "pass22po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI023", password: "pass23po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI024", password: "pass24po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI025", password: "pass25po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI026", password: "pass26po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI027", password: "pass27po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI028", password: "pass28po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI029", password: "pass29po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI030", password: "pass30po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI031", password: "pass31po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI032", password: "pass32po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI033", password: "pass33po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI034", password: "pass34po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI035", password: "pass35po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
            { username: "PI036", password: "pass36po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
          //  { username: "PI037", password: "pass37po", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
           // { username: "demouser", password: "demouser1", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_pollachi.html" },
        ],
    },
    coimbatore: {
        students: [
            { username: "admin", password: "coimbatoreTNHK", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE001", password: "pass01co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE002", password: "pass02co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE003", password: "pass03co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE004", password: "pass04co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE005", password: "pass05co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE006", password: "pass06co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE007", password: "pass07co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE008", password: "pass08co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE009", password: "pass09co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE010", password: "pass10co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE011", password: "pass11co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE012", password: "pass12co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE013", password: "pass13co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE014", password: "pass14co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
            { username: "CE015", password: "pass15co", redirect: "/Online-monitoring/Camera_Access/Online_monitoring_coimbatore.html" },
        ],
    },
};

// Login validation function
function validateOnlineMonitoringLogin() {
    const username = document.getElementById('onlineMonitoringUsername').value.trim();
    const password = document.getElementById('onlineMonitoringPassword').value.trim();
    const messageDiv = document.getElementById('inputMessage');

    // Display the message box
    messageDiv.style.display = "block";

    // Iterate over each branch
    for (let branch in loginData) {
        const students = loginData[branch].students;

        // Check if the username and password match any student in the branch
        for (let student of students) {
            if (username === student.username && password === student.password) {
                // Success message
                messageDiv.style.color = 'green';
                messageDiv.style.border = '2px solid green';
                messageDiv.style.padding = '10px';
                messageDiv.style.backgroundColor = '#e6ffe6';
                messageDiv.innerText = `Successfully Logged In as ${username} from ${branch.charAt(0).toUpperCase() + branch.slice(1)} Branch! Redirecting...`;

                // Redirect to the student-specific page after 2 seconds
                setTimeout(() => {
                    window.location.href = student.redirect;
                }, 2000);

                return false; // Prevent form submission
            }
        }
    }

    // Error message for invalid credentials
    messageDiv.style.color = 'red';
    messageDiv.style.border = '2px solid red';
    messageDiv.style.padding = '10px';
    messageDiv.style.backgroundColor = '#ffe6e6';
    messageDiv.innerText = 'Invalid Credentials. Please try again.';

    return false; // Prevent form submission
}
 
// Show/Hide Password Functionality
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('onlineMonitoringPassword');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change the icon
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

