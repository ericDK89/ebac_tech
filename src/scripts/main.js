AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const eventDate = new Date("Apr 08, 2023 15:00:00").getTime();

  const timeLeft = setInterval(function () {
    const now = new Date().getTime();
    const distanceToEvent = eventDate - now;

    const daysToEvent = Math.floor(distanceToEvent / (1000 * 60 * 60 * 24));
    const hoursToEvent = Math.floor(
      (distanceToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesToEvent = Math.floor(
      (distanceToEvent % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsToEvent = Math.floor((distanceToEvent % (1000 * 60)) / 1000);

    if (distanceToEvent < 0) {
      clearInterval(timeLeft);
      document.getElementById("countdown").innerHTML = "Evento expirado";
    } else {
      document.getElementById(
        "countdown"
      ).innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;
    }
  }, 1000);
});
