window.addEventListener('load', function()
{
    var status = document.getElementById("status");

    function updateOnlineStatus(event)
    {
        var condition = navigator.onLine ? "ONLINE" : "OFFLINE";

        status.innerHTML = condition;
    }

    window.addEventListener('ONLINE', updateOnlineStatus);
    window.addEventListener('OFFLINE', updateOnlineStatus); //not sure if I'm doing this right...
}); 