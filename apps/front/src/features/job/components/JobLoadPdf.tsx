import { Button } from '@/shared/ui/button';
import { useActionState, useRef } from 'react';

const JobLoadPdf = () => {
  const refInputFile = useRef<HTMLInputElement | null>(null);

  async function addToCart(prevState, queryData) {
    const itemID = queryData.get('itemID');
    if (itemID === '1') {
      return 'Added to cart';
    } else {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      return "Couldn't add to cart: the item is sold out.";
    }
  }

  const [message, formAction, isPending] = useActionState(addToCart, null);

  const handleResumeUpload = () => {
    refInputFile.current?.click();
  };

  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <div className="text-white">
            {!isPending ? <p>demo</p> : <p>{message}</p>}
          </div>
          <form method="post" action={formAction} className="flex items-center gap-4">
            <input
              ref={refInputFile}
              type="file"
              accept=".pdf"
              className="hidden"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="cursor-pointer">
              <Button
                onClick={handleResumeUpload}
                className="bg-indigo-800 hover:bg-indigo-700 text-white border border-indigo-600 cursor-pointer"
              >
                Upload your resume
              </Button>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobLoadPdf;
