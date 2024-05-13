-- CreateTable
CREATE TABLE "URL" (
    "id" SERIAL NOT NULL,
    "shortId" TEXT NOT NULL,
    "redirectedURL" TEXT NOT NULL,
    "visitHistory" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "URL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "URL_id_key" ON "URL"("id");

-- CreateIndex
CREATE UNIQUE INDEX "URL_shortId_key" ON "URL"("shortId");
