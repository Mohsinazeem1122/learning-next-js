import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/complex-dashboard/archived">
          <button className="bg-blue-500 text-white px-2 rounded">
            Archived
          </button>
        </Link>
      </div>
    </Card>
  );
}

export default Notifications;
