function calculateDCET() {
    let cgpa = parseFloat(document.getElementById('cgpa').value);
    let dcet = parseFloat(document.getElementById('dcet').value);
    
    let semPercentage = cgpa * 9.5; // Convert CGPA to percentage
    let dcetPercentage = (dcet / 100) * 50; // Convert DCET marks to 50%
    
    let finalPercentage = (semPercentage * 0.5) + (dcetPercentage * 0.5);
    
    document.getElementById('dcet-result').innerHTML = `Final Percentage: ${finalPercentage.toFixed(2)}%`;
}

function calculateDiploma() {
    let marks = [
        parseFloat(document.getElementById('marks1').value),
        parseFloat(document.getElementById('marks2').value),
        parseFloat(document.getElementById('marks3').value),
        parseFloat(document.getElementById('marks4').value),
        parseFloat(document.getElementById('marks5').value)
    ];
    
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let percentage = (total / (marks.length * 100)) * 100;
    
    document.getElementById('diploma-result').innerHTML = `Total Marks: ${total}, Percentage: ${percentage.toFixed(2)}%`;
}
    
