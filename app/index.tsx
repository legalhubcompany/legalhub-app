import { useNavigationContainerRef, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
    const router = useRouter();
    const navReadyRef = useNavigationContainerRef();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 10); // tunggu sebentar agar root layout siap

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (isMounted) {
            router.replace("./splash");
        }
    }, [isMounted]);

    return null;
}
