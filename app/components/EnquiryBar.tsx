const phone = "+91 9528088615";
const whatsapp = "919528088615";
const email = "kapilhardik11@gmail.com";

export default function EnquiryBar() {
  return <aside aria-label="Quick contact" className="sticky top-0 z-50 bg-accent text-mill"><div className="site-shell flex min-h-11 items-center justify-between gap-3 py-2 font-body text-xs font-semibold sm:text-sm"><span className="hidden text-mill/80 md:inline">Export enquiries, answered promptly.</span><div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end"><a href={`tel:${phone.replaceAll(" ", "")}`} aria-label={`Call us on ${phone}`}>Call <span className="hidden sm:inline">{phone}</span></a><span aria-hidden="true" className="text-mill/45">|</span><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a><span aria-hidden="true" className="text-mill/45">|</span><a href={`mailto:${email}`}>Email export desk</a></div></div></aside>;
}
