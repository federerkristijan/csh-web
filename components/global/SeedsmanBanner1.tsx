import Image from "next/image";

export default function SeedsmanBanner() {
  return (
    <div className="my-4 flex flex-col items-center">
      <a
        href="https://www.seedsman.com/us-en/purple-ghost-candy-feminised-seeds-sman-pgcandy-fem?a_aid=67c03c2ae8649&amp;a_bid=b14b1f2e"
        target="_top"
      >
        <Image
          src="https://seedsman.postaffiliatepro.com/accounts/default1/aang5ubmn24/b14b1f2e.gif"
          alt="Seedsman - Cannabis Super Store"
          title="Seedsman - Cannabis Super Store"
          width="728"
          height="90"
        />
      </a>
      <Image
        style={{ border: 0 }}
        src="https://seedsman.postaffiliatepro.com/scripts/aang5uimn24?a_aid=67c03c2ae8649&amp;a_bid=b14b1f2e"
        width="1"
        height="1"
        alt=""
      />
    </div>
  );
}
