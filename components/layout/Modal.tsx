import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";
import Link from "next/link";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="px-400 md:px-1000 flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white py-6 pt-8 text-center">
          <a href="">
            {/* <Image
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            /> */}
          </a>
          <h3 className="font-display text-2xl font-bold">Address</h3>
          <p className="text-sm text-gray-500">aaaaaaaaa</p>
          <iframe
            className="md:borde w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2305.7066364102707!2d100.31780637789555!3d13.613851220663326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2719d65a96c5b70d!2zMTPCsDM2JzUwLjgiTiAxMDDCsDE5JzAyLjciRQ!5e0!3m2!1sth!2sus!4v1675167589270!5m2!1sth!2sus"
            width={450}
            height={400}
          ></iframe>
        </div>
        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          {signInClicked ? (
            <LoadingDots color="#808080" />
          ) : (
            <>
              {/* <Google className="h-5 w-5" /> */}
              <h3 className="text-center font-display text-2xl font-bold">
                Google Map
              </h3>

              {/* <a href="">Google Map </a> */}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}
