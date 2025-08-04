import React, { useState } from 'react';

interface EmailCorporativoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const genericDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
  "live.com",
  "bol.com.br",
  "uol.com.br",
  "msn.com",
  "protonmail.com",
  "zoho.com",
  "mail.com",
  "gmx.com"
];

function isGenericEmail(email: string) {
  const match = email.match(/@([\w.-]+)$/);
  if (!match) return false;
  const domain = match[1].toLowerCase();
  return genericDomains.includes(domain);
}

const EmailCorporativoInput: React.FC<EmailCorporativoInputProps> = ({
  value,
  onChange,
  placeholder = "E-mail Corporativo",
  className = '',
  ...rest
}) => {
  const [showEmailMsg, setShowEmailMsg] = useState(false);

  const handleBlur = () => {
    setShowEmailMsg(isGenericEmail(value));
  };

  return (
    <>
      <input
        type="email"
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={className}
        {...rest}
      />
      {showEmailMsg && (
        <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3 mb-2">
          Crie um email corporativo para garantir maior confiança para sua empresa. {' '}
          <a href="/servico-email" className="text-blue-600 underline font-semibold">Click aqui para ter um email corporativo</a>
        </div>
      )}
    </>
  );
};

export default EmailCorporativoInput; 