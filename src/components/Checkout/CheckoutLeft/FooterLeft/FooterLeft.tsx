function FooterLeft() {
  return (
    <div className="flex gap-2 items-center justify-center text-xs pb-2">
      <div>
        Powered by <span className="font-semibold">Stripe</span>
      </div>
      <div className="border-l-[1px] border-slate-400 h-4"></div>
      <div className="flex gap-2">
        <a href="https://stripe.com/es/legal/consumer" target="_blank">
          Legal
        </a>
        <a href="https://support.stripe.com/topics/refunds" target="_blank">
          Returns
        </a>
        <a href="https://stripe.com/es/contact" target="_blank">
          Contact
        </a>
      </div>
    </div>
  );
}

export default FooterLeft;
