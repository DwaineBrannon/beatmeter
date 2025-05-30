import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import {
  SorterContainer,
  SorterHeader,
  ButtonContainer,
  SorterButton,
  FinalRankingContainer,
  RankingContent,
  RankingTitle,
  SongInfo,
  SongTitle,
  ArtistName,
  AlbumCover,
  ComparisonContainer,
  ComparisonControls
} from './BiasSorter.styles';

// Accept 'album' prop instead of albumName/artistName
const BiasSorter = ({ songs, album }) => {
  const [sortedList, setSortedList] = useState([]); // The sorted list of songs
  const [unsortedList, setUnsortedList] = useState([...songs]); // Songs yet to be sorted
  const [currentComparison, setCurrentComparison] = useState(null); // Current pair being compared
  const [isSorted, setIsSorted] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  // Helper: capture screenshot and download
  // background should be transparent
  const downloadScreenshot = async () => {
    setIsCapturing(true);
    const node = document.getElementById("final-ranking");
    if (!node) return;
    // Temporarily hide share buttons for screenshot
    const shareDiv = document.getElementById('share-buttons');
    if (shareDiv) shareDiv.style.display = 'none';
    const canvas = await html2canvas(node);
    const url = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ranking.png';
    link.click();
    if (shareDiv) shareDiv.style.display = '';
    setIsCapturing(false);
  };

  // Helper: open Twitter intent
  const shareOnTwitter = () => {
    const tweetText = encodeURIComponent(
      `I just ranked my favorite songs! Try it here: http://beatmeter.top`
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`);
  };

  // Start the sorting process
  useEffect(() => {
    if (unsortedList.length === 0 && !currentComparison) {
      setIsSorted(true); // Sorting is complete
      return;
    }

    if (!currentComparison && unsortedList.length > 0) {
      // Take the next song from the unsorted list
      const nextSong = unsortedList[0];
      setUnsortedList(unsortedList.slice(1)); // Remove it from the unsorted list

      // If the sorted list is empty, add the first song directly
      if (sortedList.length === 0) {
        setSortedList([nextSong]);
      } else {
        // Compare the new song with the sorted list
        setCurrentComparison({ song: nextSong, index: 0 });
      }
    }
  }, [unsortedList, currentComparison, sortedList]);

  // Handle the user's choice
  const handleChoice = (isBetter) => {
    const { song, index } = currentComparison;

    if (isBetter) {
      // If the new song is better, move to the next comparison
      if (index + 1 < sortedList.length) {
        setCurrentComparison({ song, index: index + 1 });
      } else {
        // If we've reached the end, add the song to the end of the sorted list
        setSortedList([...sortedList, song]);
        setCurrentComparison(null); // Move to the next song
      }
    } else {
      // If the new song is worse, insert it at the current position
      const newSortedList = [...sortedList];
      newSortedList.splice(index, 0, song);
      setSortedList(newSortedList);
      setCurrentComparison(null); // Move to the next song
    }
  };

  // --- Final Ranking UI ---
  // Extract album info if available
  const albumName = album?.name;
  const artistNames = album?.artists ? album.artists.map(a => a.name).join(", ") : "";
  const albumCover = album?.images && album.images.length > 0 ? album.images[0].url : null;

  // Main content area: always rendered, fixed minHeight
  const mainContent = isSorted ? (
    <FinalRankingContainer id="final-ranking">
      <RankingContent>
        <RankingTitle>MY {albumName ? albumName : "Song"} Ranking</RankingTitle>
        {albumName && (
          <SongInfo>
            <SongTitle>{albumName}</SongTitle>
          </SongInfo>
        )}
        {artistNames && (
          <ArtistName>{artistNames}</ArtistName>
        )}
        <ol>
          {sortedList.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ol>
      </RankingContent>
      {albumCover && (
        <AlbumCover src={albumCover} alt="Album cover" />
      )}
    </FinalRankingContainer>
  ) : currentComparison ? (
    <ComparisonContainer>
      <SorterHeader>Choose your favorite</SorterHeader>
      <ButtonContainer>
        <SorterButton onClick={() => handleChoice(false)}>
          {currentComparison.song}
        </SorterButton>
        <SorterButton onClick={() => handleChoice(true)}>
          {sortedList[currentComparison.index]}
        </SorterButton>      </ButtonContainer>
    </ComparisonContainer>
  ) : (
    <ComparisonContainer>
      <SorterButton onClick={() => setCurrentComparison(null)}>
        Start Sorting
      </SorterButton>
    </ComparisonContainer>
  );

  return (
    <SorterContainer>
      {mainContent}
      <ComparisonControls>
        {isSorted ? (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 8 }}>
              <SorterButton
                onClick={downloadScreenshot}
                disabled={isCapturing}
              >
                {isCapturing ? "Capturing..." : "Download Image"}
              </SorterButton>
              <SorterButton onClick={shareOnTwitter}>Share on Twitter</SorterButton>
            </div>
            <SorterButton onClick={() => window.location.reload()}>
              Sort Again
            </SorterButton>
          </>
        ) : (
          <SorterButton style={{visibility: 'hidden'}}>Sort Again</SorterButton>
        )}
      </ComparisonControls>
    </SorterContainer>
  );
};

export default BiasSorter;