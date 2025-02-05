import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link href="/complex-dashboard">
          <button className="bg-red-500 text-white px-2 rounded">
            Default
          </button>
        </Link>
      </div>
    </Card>
  );
}

export default ArchivedNotifications;
