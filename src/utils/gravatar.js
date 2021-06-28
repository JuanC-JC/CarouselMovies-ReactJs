import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/$?d=identicon';
  const formatEmail = (email).trim().toLowerCase();
  const hash = md5(formatEmail);
  return base.replace('$', hash);

};

export default gravatar;
