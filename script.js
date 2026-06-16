function bookAppointment() {

    let patientName =
        document.getElementById("patientName").value;

    let patientAge =
        document.getElementById("patientAge").value;

    let doctor =
        document.getElementById("doctor").value;

    let appointmentDate =
        document.getElementById("appointmentDate").value;

    if (
        patientName === "" ||
        patientAge === "" ||
        doctor === "Select Doctor" ||
        appointmentDate === ""
    ) {
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("result").innerHTML =
        `
        <div style="
            margin-top:20px;
            padding:15px;
            background:#d4edda;
            color:#155724;
            border-radius:5px;
        ">
            ✅ Appointment Booked Successfully!<br><br>

            <strong>Patient:</strong> ${patientName}<br>
            <strong>Age:</strong> ${patientAge}<br>
            <strong>Doctor:</strong> ${doctor}<br>
            <strong>Date:</strong> ${appointmentDate}
        </div>
        `;

    document.getElementById("patientName").value = "";
    document.getElementById("patientAge").value = "";
    document.getElementById("doctor").selectedIndex = 0;
    document.getElementById("appointmentDate").value = "";
}
