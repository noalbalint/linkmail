import { computed, reactive } from 'vue'

interface IEmailStore {
  to: string[],
  cc: string[],
  bcc: string[],
  subject: string,
  body: string,
  mailtoValue: string,
}

const emailStore: IEmailStore = reactive({
  to: [''],
  cc: [''],
  bcc: [''],
  subject: '',
  body: '',
  mailtoValue: computed((): string => {
    return buildMailtoValue();
  }),
});

function buildMailtoValue() {
  let link = '';

  if (emailStore.to.length) {
    const recipients = emailStore.to.join(',');
    link += `${recipients}?`;
  }
  if (emailStore.cc.length) {
    const recipients = emailStore.cc.join(',');
    link += `&cc=${recipients}`
  }
  if (emailStore.bcc.length) {
    const recipients = emailStore.bcc.join(',');
    link += `&bcc=${recipients}`
  }
  if (emailStore.subject) {
    link += `&subject=${encodeURIComponent(emailStore.subject)}`
  }
  if (emailStore.body) {
    link += `&body=${encodeURIComponent(emailStore.body)}`
  }

  return link;
}

export { emailStore };
