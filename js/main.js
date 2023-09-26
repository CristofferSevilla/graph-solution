const form = document.querySelector('#email_form');

const text = document.querySelector("input[name='text']");
const subject = document.querySelector("input[name='subject']");

const title = form.querySelector("select[name='title']");
const message = form.querySelector("textarea[name='message']");
const firstName = form.querySelector("input[name='first-name']");
const lastName = form.querySelector("input[name='last-name']");
const company = form.querySelector("input[name='company']");
const telephone = form.querySelector("input[name='telephone']");
const email = form.querySelector("input[name='email']");

form.querySelectorAll('.to-message').forEach(input => input.addEventListener('change', () => {
  subject.value = `Graph Solutions : ${title.value} ${firstName.value} - ${lastName.value}`;
  text.value = `
      From ${title.value} ${firstName.value} - ${lastName.value}

      Company: ${company.value}
      Telephone: ${telephone.value}
      Email: ${email.value}

      ${message.value}
    `;
}))
