type Nav = {
  title: string,
  href: string,
}

type ExtendedContactFormInputs = ContactFormInputs & {
  turnstileToken: string;
};