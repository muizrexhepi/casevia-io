import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function NotFound() {
  return (
    // Use a similar container and border structure to your other pages
    <section className="border-x border-border container">
      {/* This div centers the content vertically. 
        We calculate a min-height to fill the screen minus the header/footer.
        You can adjust '200px' to be your combined header/footer height.
      */}
      <div className="flex flex-col items-center justify-center text-center py-20 md:py-16 md:py-32 min-h-[calc(100vh-200px)]">
        <div className="max-w-md mx-auto space-y-6">
          <p className="text-6xl md:text-7xl font-bold tracking-tighter text-foreground/80">
            404
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground">
            Sorry, we couldn’t find the page you were looking for. It might have
            been moved or deleted.
          </p>

          {/* Actions to guide the user */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
