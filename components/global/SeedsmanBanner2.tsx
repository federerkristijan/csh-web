import Image from "next/image";

export default function SeedsmanBanner() {
  return (
    <div className="my-4 flex flex-col items-center">
      <a
        href="https://www.seedsman.com/us-en/?a_aid=67c03c2ae8649&amp;a_bid=6d91bf71"
        target="_top"
      >
        <Image
          src="https://seedsman.postaffiliatepro.com/accounts/default1/aang5ubmn24/6d91bf71.png"
          alt="Seedsman - Cannabis Super Store"
          title="Seedsman - Cannabis Super Store"
          width="2001"
          height="599"
        />
      </a>
      <Image
        style={{ border: 0 }}
        src="https://seedsman.postaffiliatepro.com/scripts/aang5uimn24?a_aid=67c03c2ae8649&amp;a_bid=6d91bf71"
        width="1"
        height="1"
        alt=""
      />
    </div>
  );
}
