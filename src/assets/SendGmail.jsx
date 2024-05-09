const SendGmail = (user) => {

    const mailtoUrl = `mailto:${user.email}?subject=${encodeURIComponent(user.subject)}`;
    window.location.href = mailtoUrl;

}

export default SendGmail;
