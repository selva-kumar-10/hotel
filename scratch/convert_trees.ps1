Add-Type -AssemblyName System.Drawing

$inputPath = "c:\Users\User\Desktop\hotel1\public\images\coconut-trees.jpg"
$outputPath = "c:\Users\User\Desktop\hotel1\public\images\coconut-trees-transparent.png"

$bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Target color: #6B430F -> R: 107, G: 67, B: 15
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        $brightness = $c.GetBrightness()
        
        # If dark (tree silhouette), color it dark golden brown #6B430F with smooth alpha
        if ($brightness -lt 0.9) {
            $alpha = [int]((1.0 - $brightness) * 255)
            if ($alpha -gt 255) { $alpha = 255 }
            $newColor = [System.Drawing.Color]::FromArgb($alpha, 107, 67, 15)
            $newBmp.SetPixel($x, $y, $newColor)
        } else {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$newBmp.Dispose()
Write-Host "Success! Created transparent coconut trees PNG."
