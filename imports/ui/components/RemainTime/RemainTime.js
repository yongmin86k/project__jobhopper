export default function CountdownTime(dateExpire) {
  if (dateExpire) {
    let currentTime = moment(),
      day = dateExpire.diff(currentTime, "days"),
      hour = dateExpire.diff(currentTime, "hours") % 24,
      min =
        dateExpire.diff(currentTime, "minutes") % 60 < 10
          ? "0" + (dateExpire.diff(currentTime, "minutes") % 60)
          : dateExpire.diff(currentTime, "minutes") % 60,
      sec =
        dateExpire.diff(currentTime, "seconds") % 60 < 10
          ? "0" + (dateExpire.diff(currentTime, "seconds") % 60)
          : dateExpire.diff(currentTime, "seconds") % 60,
      remainTime =
        day > 1
          ? `${day} Days ${hour}:${min}:${sec}`
          : day === 1
          ? `${day} Day ${hour}:${min}:${sec}`
          : dateExpire.diff(currentTime, "seconds") > 0
          ? `${hour}:${min}:${sec}`
          : "Date Expired";

    return remainTime;
  }
}
